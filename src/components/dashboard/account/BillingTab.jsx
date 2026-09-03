import { useState } from "react";
import { useNavigate } from "react-router-dom";
const creditHistory = [
    { date: "24/06/2026 14:26", desc: "記事生成 — JOB_260624_VRGJAVE", type: "used", amount: -1, balance: 22 },
    { date: "24/06/2026 13:51", desc: "記事生成 — JOB_260624_J9ONKQ", type: "used", amount: -1, balance: 23 },
    { date: "24/06/2026 13:35", desc: "記事生成 — JOB_260624_GEGDYY", type: "used", amount: -1, balance: 24 },
    { date: "24/06/2026 08:16", desc: "記事生成 — JOB_260624_J8LSZT", type: "used", amount: -1, balance: 25 },
    { date: "23/06/2026 11:14", desc: "購入 — 2パッケージ", type: "buy", amount: 2, balance: 26 },
    { date: "22/06/2026 16:31", desc: "記事生成 — JOB_260622_IWCVKQ", type: "used", amount: -1, balance: 24 },
    { date: "22/06/2026 14:33", desc: "記事生成 — JOB_260622_CFESJD", type: "used", amount: -1, balance: 25 },
    { date: "22/06/2026 14:18", desc: "記事生成 — JOB_260622_BLHOJR", type: "used", amount: -1, balance: 26 }
];
const purchaseHistory = [
    { date: "2026年6月23日", plan: "2 クレジット", amount: "$11", highlight: false },
    { date: "2026年6月4日", plan: "不明なパッケージ", amount: "$17", highlight: false, muted: true },
    { date: "2026年6月2日", plan: "2 クレジット", amount: "$11", highlight: false },
    { date: "2026年6月2日", plan: "10 クレジット", amount: "$55", highlight: true },
    { date: "2026年5月26日", plan: "2 クレジット", amount: "$11", highlight: false },
    { date: "2026年5月25日", plan: "10 クレジット", amount: "$55", highlight: true }
];
const creditHistoryPages = [1, 2, 3, 4, 5];
const purchaseHistoryPages = [1, 2, 3];
export default function BillingTab({
    availableCredits
}) {
    const navigate = useNavigate();
    const [creditPage, setCreditPage] = useState(1);
    const [purchasePage, setPurchasePage] = useState(1);
    return (
        <div className="account-content active">
            <div
                className="card"
                style={{
                    background: "var(--accent-soft)",
                    borderColor: "var(--accent-dim)"
                }}
            >
                <div
                    className="card-body"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        gap: "14px"
                    }}
                >
                    <div>
                        <div
                            className="label-xs"
                            style={{
                                marginBottom: "4px"
                            }}
                        >
                            利用可能クレジット
                        </div>
                        <div
                            style={{
                                fontSize: "32px",
                                fontWeight: 700,
                                color: "var(--text)",
                                lineHeight: 1,
                                letterSpacing: "-.03em"
                            }}
                        >
                            {availableCredits}
                        </div>
                        <div
                            style={{
                                fontSize: "12px",
                                color: "var(--text-mute)",
                                marginTop: "5px"
                            }}
                        >
                            1クレジット = 記事1件作成
                        </div>
                    </div>
                    <button
                        className="btn btn-primary"
                        onClick={
                            () => navigate("/dashboard/credits/")
                        }
                    >
                        <svg viewBox="0 0 24 24">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                        クレジット購入
                    </button>
                </div>
            </div>

            <div
                className="section-title"
                style={{
                    marginTop: "24px"
                }}
            >
                クレジット利用履歴
            </div>
            <div
                style={{
                    fontSize: "12px",
                    color: "var(--text-mute)",
                    margin: "-6px 0 12px"
                }}
            >
                最近のクレジット取引
            </div>
            <div
                className="card"
                style={{
                    padding: 0,
                    overflow: "hidden"
                }}
            >
                <div
                    style={{
                        overflowX: "auto"
                    }}
                >
                    <table className="usage-table">
                        <thead>
                            <tr>
                                <th>日付</th>
                                <th>説明</th>
                                <th>タイプ</th>
                                <th style={{ textAlign: "right" }}>クレジット</th>
                                <th style={{ textAlign: "right" }}>残高</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                creditHistory.map((tx, i) => (
                                    <tr key={i}>
                                        <td style={{ whiteSpace: "nowrap" }}>
                                            {tx.date}
                                        </td>
                                        <td style={{ fontFamily: "var(--mono)", fontSize: "12px" }}>
                                            {tx.desc}
                                        </td>
                                        <td>
                                            <span className={`tx-tag tx-${tx.type}`}>
                                                {tx.type === "buy" ? "購入" : "使用"}
                                            </span>
                                        </td>
                                        <td
                                            style={{
                                                textAlign: "right",
                                                color: tx.amount < 0 ? "var(--red-text)" : "var(--green-text)"
                                            }}
                                        >
                                            {tx.amount > 0 ? `+${tx.amount}` : tx.amount}
                                        </td>
                                        <td style={{ textAlign: "right", fontWeight: 600 }}>
                                            {tx.balance}
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="pagination">
                {
                    creditHistoryPages.map(page => (
                        <button
                            key={page}
                            className={`page-btn ${creditPage === page ? "active" : ""}`}
                            onClick={() => setCreditPage(page)}
                        >
                            {page}
                        </button>
                    ))
                }
                <span
                    style={{
                        color: "var(--text-mute)",
                        padding: "0 4px"
                    }}
                >
                    …
                </span>
                <button
                    className={`page-btn ${creditPage === 14 ? "active" : ""}`}
                    onClick={() => setCreditPage(14)}
                >
                    14
                </button>
            </div>

            <div
                className="section-title"
                style={{
                    marginTop: "28px"
                }}
            >
                購入履歴
            </div>
            <div
                style={{
                    fontSize: "12px",
                    color: "var(--text-mute)",
                    margin: "-6px 0 12px"
                }}
            >
                Stripe経由の決済取引
            </div>
            <div
                className="card"
                style={{
                    padding: 0,
                    overflow: "hidden"
                }}
            >
                <div
                    style={{
                        overflowX: "auto"
                    }}
                >
                    <table className="usage-table">
                        <thead>
                            <tr>
                                <th>日付</th>
                                <th>パッケージ</th>
                                <th style={{ textAlign: "right" }}>金額</th>
                                <th style={{ textAlign: "center" }}>ステータス</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                purchaseHistory.map((tx, i) => (
                                    <tr key={i}>
                                        <td style={{ whiteSpace: "nowrap" }}>
                                            {tx.date}
                                        </td>
                                        <td
                                            style={
                                                tx.muted
                                                    ? { color: "var(--text-mute)" }
                                                    : tx.highlight
                                                        ? { color: "var(--accent-hover)" }
                                                        : undefined
                                            }
                                        >
                                            {tx.plan}
                                        </td>
                                        <td style={{ textAlign: "right", fontWeight: 600 }}>
                                            {tx.amount}
                                        </td>
                                        <td style={{ textAlign: "center" }}>
                                            <span className="tx-tag tx-paid">
                                                支払済み
                                            </span>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="pagination">
                {
                    purchaseHistoryPages.map(page => (
                        <button
                            key={page}
                            className={`page-btn ${purchasePage === page ? "active" : ""}`}
                            onClick={() => setPurchasePage(page)}
                        >
                            {page}
                        </button>
                    ))
                }
            </div>
        </div>
    );
}
