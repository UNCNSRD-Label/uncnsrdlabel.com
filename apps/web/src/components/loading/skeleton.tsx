const ParagraphA = () => {
  return (
    <div className="flex space-x-4">
      <div className="h-10 w-10 rounded-full bg-slate-200"></div>
      <div className="flex-1 space-y-6 py-1">
        <div className="h-2 rounded bg-slate-200"></div>
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 h-2 rounded bg-slate-200"></div>
            <div className="col-span-1 h-2 rounded bg-slate-200"></div>
          </div>
          <div className="h-2 rounded bg-slate-200"></div>
        </div>
      </div>
    </div>
  );
};

const ParagraphB = () => {
  return (
    <div className="flex space-x-4">
      <div className="flex-1 space-y-6 py-1">
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1 h-2 rounded bg-slate-200"></div>
            <div className="col-span-2 h-2 rounded bg-slate-200"></div>
          </div>
          <div className="h-2 rounded bg-slate-200"></div>
        </div>
        <div className="h-2 rounded bg-slate-200"></div>
      </div>
      <div className="h-10 w-10 rounded-full bg-slate-200"></div>
    </div>
  );
};

export const LoadingSkeleton = () => {
  return (
    <div className="mx-auto flex max-w-2xl animate-pulse flex-col p-6 space-y-4 w-full">
      <ParagraphA />
      <ParagraphB />
      <ParagraphA />
      <ParagraphB />
      <ParagraphA />
      <ParagraphB />
      <ParagraphA />
      <ParagraphB />
    </div>
  );
};
