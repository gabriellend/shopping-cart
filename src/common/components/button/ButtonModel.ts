export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  to?: string; // path
  type?: string;
  className: string;
}
