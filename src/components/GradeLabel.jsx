import '../css/GradeLabel.css';
import { FaCanadianMapleLeaf } from 'react-icons/fa';

function GradeLabel({ grade }) {
    return (
        <FaCanadianMapleLeaf size="90px" className="grade-label">
            {grade}
        </FaCanadianMapleLeaf>
    )
}

export default GradeLabel;