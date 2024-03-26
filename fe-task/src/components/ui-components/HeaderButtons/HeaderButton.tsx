import { HeaderButtonProps } from "../../../models/HeaderButtonProps";
import styles from './HeaderButton.module.scss';

const HeaderButton =  (pros: HeaderButtonProps) => {
    return <button className={`${styles["header-button"]} ${styles[pros.buttonColor]}`} onClick={pros.onClick}>
        {pros.label}
    </button>
}
export default HeaderButton;