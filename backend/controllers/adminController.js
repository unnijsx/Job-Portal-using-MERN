const Student = require('../models/Student');
const Seeker = require('../models/Seeker');

// Login (for Admin, Student, Seeker)
const Login = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Admin login
        if (username === "admin@gmail.com" && password === "admin") {
            return res.json({ message: "admin" });
        }

        // Student login
        const student = await Student.findOne({ email: username });
        if (student) {
            if (student.password === password) {
                return res.json({ message: "student", data: student });
            } else {
                return res.json({ message: "Incorrect password" });
            }
        }

        // Seeker login
        const seeker = await Seeker.findOne({ email: username });
        if (seeker) {
            if (seeker.password === password) {
                return res.json({ message: "seeker", data: seeker });
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
