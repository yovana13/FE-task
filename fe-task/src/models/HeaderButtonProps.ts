import { HeaderButtonColorEnum } from "../shared/enums/HeaderButtonColorEnum";

export interface HeaderButtonProps {
    buttonColor: HeaderButtonColorEnum;
    label: string;
    onClick: () => void;
}