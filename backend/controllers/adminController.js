const Student = require('../models/Student');
const Seeker = require('../models/Seeker');
const jwt = require("jsonwebtoken");
const SECRET_KEY = "shhh";
// Login (for Admin, Student, Seeker)
const Login = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Admin login
        if (username === "admin@gmail.com" && password === "admin") {
            const token = jwt.sign({ role: "admin", username }, SECRET_KEY, { expiresIn: "1d" });
            return res.json({ message: "admin", token });
        }

        // Student login
        const student = await Student.findOne({ email: username });
        if (student) {
            if (student.password === password) {
                const token = jwt.sign({ role: "student", id: student._id, email: student.email }, SECRET_KEY, { expiresIn: "1d" });
                return res.json({ message: "student", data: student, token });
            } else {
                return res.json({ message: "Incorrect password" });
            }
        }

        // Seeker login
        const seeker = await Seeker.findOne({ email: username });
        if (seeker) {
            if (seeker.password === password) {
                const token = jwt.sign({ role: "seeker", id: seeker._id, email: seeker.email }, SECRET_KEY, { expiresIn: "1d" });
                return res.json({ message: "seeker", data: seeker, token });
            } else {
                return res.json({ message: "Incorrect password" });
            }
        }

        return res.json({ message: "User not found" });

    } catch (err) {
        console.error("Login error:", err);
        return res.status(500).json({ message: "Server error", error: err });
    }
};

const ForgotPass = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if user is a student
        const student = await Student.findOne({ email: username });
        if (student) {
            await Student.updateOne({ email: username }, { password: password });
            return res.json({ message: "Password updated successfully", user: "student" });
        }

        // Check if user is a seeker
        const seeker = await Seeker.findOne({ email: username });
        if (seeker) {
            await Seeker.updateOne({ email: username }, { password: password });
            return res.json({ message: "Password updated successfully", user: "seeker" });
        }

        // If no matching user
        return res.status(404).json({ message: "User not found" });

    } catch (err) {
        console.error("Error in ForgotPass:", err);
        return res.status(500).json({ message: "Server error", error: err });
    }
};

module.exports = { Login ,ForgotPass};
