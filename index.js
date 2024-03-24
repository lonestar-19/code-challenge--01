
function calculateGrade(mark) {
    if (mark > 79) {
        return "A";
    } else if (mark >= 60 && mark <= 79) {
        return "B";
    } else if (mark >= 50 && mark <= 59) {
        return "C";
    } else if (mark >= 40 && mark <= 49) {
        return "D";
    } else {
        return "E";
    }
}

function main() {
    while (true) {
        let mark = parseFloat(prompt("Input for the student's mark: "));
        if (!isNaN(mark) && mark >= 0 && mark <= 100) {
            let grade = calculateGrade(mark);
            console.log("Grade: " + grade);
            break;
        } else {
            console.log("Kindly enter a valid mark between 0 and 100.");
        }
    }
}

main();
