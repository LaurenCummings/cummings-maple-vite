import '../css/GradeLabel.css';
import { FaCanadianMapleLeaf } from 'react-icons/fa';

function GradeLabel({ grade }) {

    return (
        <div className="grade-label">
            <FaCanadianMapleLeaf size="90px" className={`leaf-icon-${grade.replaceAll(" ", "")}`} />
            <span className={`label-${grade.replaceAll(" ", "")}`}>{grade}</span>            
        </div>
    )
}

export default GradeLabel;