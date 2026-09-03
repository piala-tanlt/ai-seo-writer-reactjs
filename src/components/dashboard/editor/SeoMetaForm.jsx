import {
    useState
} from "react";
export default function SeoMetaForm(){
    const [
        meta,
        setMeta
    ] = useState({
        title:"",
        description:"",
        keyword:""
    });
    function update(
        key,
        value
    ){
        setMeta({
            ...meta,
            [key]:value
        });
    }
    return (
        <div className="seo-box">
            <h3>
                SEO設定
            </h3>
            <label>
                Title
            </label>
            <input
                value={meta.title}
                onChange={
                    e=>update(
                        "title",
                        e.target.value
                    )
                }
            />
            <label>
                Description
            </label>
            <textarea
                value={meta.description}
                onChange={
                    e=>update(
                        "description",
                        e.target.value
                    )
                }
            />
            <label>
                Keyword
            </label>
            <input
                value={meta.keyword}
                onChange={
                    e=>update(
                        "keyword",
                        e.target.value
                    )
                }
            />
        </div>
    );
}