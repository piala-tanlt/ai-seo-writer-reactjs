import CreateArticleForm from "../../components/dashboard/create/CreateArticleForm";
export default function CreateArticlePage(){
    return (
        <section className="screen active">
            <div className="page-head">
                <h1 className="page-title">
                    記事作成
                </h1>
                <div className="page-desc">
                    AIでSEO記事を自動生成
                </div>
            </div>
            <CreateArticleForm />
        </section>
    );
}