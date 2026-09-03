import {
    useState
} from "react";
import ArticleCard from "./ArticleCard";
import ArticleFilter from "./ArticleFilter";
const initialArticles=[
{
    id:"ART-001",
    title:"2026年SEO完全ガイド",
    date:"2026/06/20",
    status:"公開済み",
    stats:{
        views:"12,450",
        clicks:"834",
        ctr:"6.7%",
        rank:"8.2"
    }
},
{
    id:"ART-002",
    title:"飲食店のためのGoogleマップマーケティング",
    date:"2026/06/22",
    status:"編集済み"
},
{
    id:"ART-003",
    title:"ランディングページ制作のポイント",
    date:"2026/06/24",
    status:"生成済み"
}
];
export default function ArticleList(){
    const [
        articles,
        setArticles
    ] = useState(initialArticles);
    function search(keyword){
        const result =
            initialArticles.filter(
                item =>
                item.title.includes(keyword)
            );
        setArticles(result);
    }
    return (
        <>
            <ArticleFilter
                onSearch={search}
            />
            <div className="section-title">記事一覧</div>
            <div className="article-list">
            {
                articles.map(article=>(
                    <ArticleCard
                        key={article.id}
                        article={article}
                    />
                ))
            }
            </div>
        </>
    );
}