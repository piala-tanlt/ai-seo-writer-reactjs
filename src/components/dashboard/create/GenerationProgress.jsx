const steps=[
    "スライド解析",
    "キーワード分析",
    "SEO構成生成",
    "記事生成"
];
export default function GenerationProgress({
    current
}){
    return (
        <div className="generation-progress">
            {
                steps.map(
                    (step,index)=>(
                    <div
                        key={step}
                        className={
                            index <= current
                            ? "step active"
                            : "step"
                        }
                    >
                        <span>
                            {index+1}
                        </span>
                        {step}
                    </div>
                ))
            }
        </div>
    );
}