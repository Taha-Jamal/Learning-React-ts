import { ReactNode } from "react";

// rafce [react arrow function component export]
interface Props {
  // childer prop to pass children
  children: ReactNode;
  onClose:() => void
}

const Alert = ({ children,onClose }: Props) => {
  return (
    <>
      <div className="alert alert-primary alert-dismissible fade show">
        {children}
        <button className="btn-close" onClick={onClose} data-ds-dismiss="Alert"></button>
      </div>
      ;
    </>
  );
};

export default Alert;
