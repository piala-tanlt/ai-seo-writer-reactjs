export default function CreateResult({
    article
}){
    if(!article)
        return null;
    return (
        <div className="create-result">
            <h2>
                生成完了
            </h2>
            <h3>
                {article.title}
            </h3>
            <p>
                {article.summary}
            </p>
            <button
                className="btn btn-primary"
            >
                エディターで編集
            </button>
        </div>
    );
}