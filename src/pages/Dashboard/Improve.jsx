import ImproveForm from "../../components/dashboard/improve/ImproveForm";
export default function ImprovePage(){
    return (
        <section className="screen active">
            <div className="page-head">
                <h1 className="page-title">
                    AI改善
                </h1>
                <div className="page-desc">
                    AIでSEO記事を分析・改善
                </div>
            </div>
            <ImproveForm />
        </section>
    );
}