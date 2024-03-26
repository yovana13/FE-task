export interface NavbarPorps {
  label: string;
  link: string;
  dropdownItems?: DropdownItem[];
}

interface DropdownItem {
  label: string;
  link: string;
}
