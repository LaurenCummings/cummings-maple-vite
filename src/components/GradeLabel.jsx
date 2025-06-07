import '../css/GradeLabel.css';
import { FaCanadianMapleLeaf } from 'react-icons/fa';

function GradeLabel({ grade }) {
    return (
        <div className="grade-label">
            <FaCanadianMapleLeaf size="90px" className="leaf-icon" />
            <p>{grade}</p>            
        </div>
    )
}

export default GradeLabel;