  export default function ArticleActions({
    article
}){
    function handleEdit(){
        console.log(
            "edit article",
            article.id
        );
    }
    function handlePublish(){
        console.log(
            "publish article",
            article.id
        );
    }
    function handleDelete(){
        console.log(
            "delete article",
            article.id
        );
    }
    return (
        <div className="article-actions">
            <button
                className="btn btn-primary"
                onClick={handleEdit}
            >
                編集
            </button>
            <button
                className="btn btn-success"
                onClick={handlePublish}
            >
                公開
            </button>
            <button
                className="btn btn-danger"
                onClick={handleDelete}
            >
                削除
            </button>
        </div>
    );
}