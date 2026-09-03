import { useNavigate } from "react-router-dom";
const stats = [
    {
        value: 8,
        label: "公開済み",
        color: "green"
    },
    {
        value: 3,
        label: "編集済み",
        color: "amber"
    },
    {
        value: 5,
        label: "生成済み",
        color: "accent"
    },
    {
        value: 24,
        label: "残りクレジット",
        color: "text-mute"
    }
];
export default function RightSidebar() {
    const navigate = useNavigate();
    return (
        <aside className="right-sidebar">
            <div className="sb-wrap">
                {stats.map(item => (
                    <div
                        className="sb-card"
                        key={item.label}
                    >
                        <div
                            className={`sb-num`} 
                            style={{
                                color: `var(--${item.color})`,
                            }}
                        >
                            {item.value}
                        </div>
                        <div className="sb-lab">
                            {item.label}
                        </div>
                    </div>
                ))}
                <button
                    className="sb-create"
                    onClick={() =>
                        navigate(
                            "/dashboard/create/"
                        )
                    }
                >
                    ＋ 新規作成
                </button>
            </div>
        </aside>
    );
}