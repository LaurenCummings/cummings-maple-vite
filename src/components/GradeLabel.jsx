import '../css/GradeLabel.css';
import { FaCanadianMapleLeaf } from 'react-icons/fa';

function GradeLabel({ grade }) {
    return (
        <FaCanadianMapleLeaf>
            {grade}
        </FaCanadianMapleLeaf>
    )
}

export default GradeLabel;