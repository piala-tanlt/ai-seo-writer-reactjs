import {
    useState
} from "react";
export default function AiImprovePanel(){
    const [
        loading,
        setLoading
    ] = useState(false);
    function improve(){
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
            alert(
                "AI改善が完了しました"
            );
        },2000);
    }
    return (
        <div className="ai-panel">
            <h3>
                AI改善
            </h3>
            <button
                className="btn btn-primary"
                onClick={improve}
            >
                {
                    loading
                    ?
                    "分析中..."
                    :
                    "✦ AIで改善"
                }
            </button>
            <div className="ai-options">
                <label>
                    <input type="checkbox"/>
                    SEO強化
                </label>
                <label>
                    <input type="checkbox"/>
                    読みやすさ改善
                </label>
                <label>
                    <input type="checkbox"/>
                    E-E-A-T強化
                </label>
            </div>
        </div>
    );
}