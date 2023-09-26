const HTMLText = ({ text }: { text: string }) => (
    <span dangerouslySetInnerHTML={{ __html: text }} />
);

export default HTMLText;
