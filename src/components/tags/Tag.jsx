
const Tag = ({content}) => (
    <>
        <div className="shadow-md flex gap-2 items-center w-fit h-fit m-1 p-1 lg:p-2 border-solid border-[2px] text-xs font-semibold rounded-3xl border-violet-500">
            <img className="h-5" src={`data:image/svg+xml;base64,${btoa(content.svgCode)}`} />
            {content.title}
        </div>
    </>
);

export default Tag;