import {
    useState
} from "react";
export default function EditorContent(){
    const [
        content,
        setContent
    ] = useState(
`
<h1>AI SEO記事タイトル</h1>
<p>
ここにAI生成された記事本文が入ります。
</p>
<h2>
SEOについて
</h2>
<p>
検索エンジンに最適化された文章です。
</p>
`
    );
    return (
        <div
            className="editor-body"
            contentEditable
            suppressContentEditableWarning
            onInput={
                e=>setContent(
                    e.currentTarget.innerHTML
                )
            }
            dangerouslySetInnerHTML={{
                __html:content
            }}
        />
    );
}