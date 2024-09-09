export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  to?: string; // path
  variant: string;
}
