import EditorContent from "../../components/dashboard/editor/EditorContent";
import EditorToolbar from "../../components/dashboard/editor/EditorToolbar";
import SeoMetaForm from "../../components/dashboard/editor/SeoMetaForm";
import AiImprovePanel from "../../components/dashboard/editor/AiImprovePanel";
export default function EditorPage(){
    return (
        <section className="screen active">
            <div className="page-head">
                <h1 className="page-title">
                    エディター
                </h1>
                <div className="page-desc">
                    AI生成記事を編集・最適化
                </div>
            </div>
            <div className="editor-layout">
                <div className="editor-main">
                    <EditorToolbar />
                    <EditorContent />
                </div>
                <aside className="editor-side">
                    <SeoMetaForm />
                    <AiImprovePanel />
                </aside>
            </div>
        </section>
    );
}