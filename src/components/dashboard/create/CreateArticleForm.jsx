import {
    useState
} from "react";
import SlideUploader from "./SlideUploader";
import KeywordInput from "./KeywordInput";
import GenerationProgress from "./GenerationProgress";
import CreateResult from "./CreateResult";
export default function CreateArticleForm(){
    const [
        file,
        setFile
    ] = useState(null);
    const [
        keyword,
        setKeyword
    ] = useState("");
    const [
        progress,
        setProgress
    ] = useState(-1);
    const [
        result,
        setResult
    ] = useState(null);
    function generate(){
        if(!file || !keyword){
            alert(
                "ファイルとキーワードを入力してください"
            );
            return;
        }
        setProgress(0);
        let step=0;
        const timer=setInterval(()=>{
            step++;
            setProgress(step);
            if(step===3){
                clearInterval(timer);
                setResult({
                    title:
                    `${keyword}についての記事`,
                    summary:
                    "AI生成されたSEO記事です"
                });
            }
        },1000);
    }
    return (
        <div className="create-form">
            <SlideUploader
                file={file}
                setFile={setFile}
            />
            <KeywordInput
                keyword={keyword}
                setKeyword={setKeyword}
            />
            <button
                className="btn btn-primary"
                onClick={generate}
            >
                ✦ AI記事を生成
            </button>
            {
                progress >=0 &&
                <GenerationProgress
                    current={progress}
                />
            }
            <CreateResult
                article={result}
            />
        </div>
    );
}