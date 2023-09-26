import useIsOnClientSide from '@/hook/useIsOnClientSide';

interface ClientComponentProps {
    children: JSX.Element;
}

const ClientComponent = ({ children }: ClientComponentProps) => {
    const isCsr = useIsOnClientSide();
    return <>{isCsr ? children : ''}</>;
};

export default ClientComponent;
