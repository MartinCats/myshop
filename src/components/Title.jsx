function Title({ title, titleStyles }) {
  return (
    <div className={`${titleStyles} pb-20 `}>
      <span
        className="h2 capitalize pb-1 relative after:w-8/10 after:h-1 
        after:bg-blue-500 after:absolute after:-bottom-1 after:right-0
        after:rounded"
      >
        {title}
      </span>
    </div>
  );
}

export default Title;
