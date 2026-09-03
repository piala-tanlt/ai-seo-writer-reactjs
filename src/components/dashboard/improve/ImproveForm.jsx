import {
    useState
} from "react";
import AnalysisResult from "./AnalysisResult";
export default function ImproveForm(){
    const [
        articleId,
        setArticleId
    ] = useState("");
    const [
        loading,
        setLoading
    ] = useState(false);
    const [
        result,
        setResult
    ] = useState(null);
    function analyze(){
        if(!articleId){
            alert(
                "記事IDを入力してください"
            );
            return;
        }
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
            setResult({
                score:82,
                suggestions:[
                    "タイトルに主要キーワードを追加",
                    "導入文を改善",
                    "内部リンクを追加",
                    "E-E-A-T情報を強化"
                ]
            });
        },1500);
    }
    return (
        <div className="improve-form">
            <div className="form-group">
                <label>
                    記事ID
                </label>
                <input
                    className="form-input"
                    value={articleId}
                    onChange={
                        e=>setArticleId(
                            e.target.value
                        )
                    }
                    placeholder="ART-001"
                />
            </div>
            <button
                className="btn btn-primary"
                onClick={analyze}
            >
                {
                    loading
                    ?
                    "分析中..."
                    :
                    "✦ AI分析開始"
                }
            </button>
            <AnalysisResult
                result={result}
            />
        </div>
    );
}