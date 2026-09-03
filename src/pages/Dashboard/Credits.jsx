const plans=[
    {
        name:"Starter",
        credits:100,
        price:"¥980"
    },
    {
        name:"Professional",
        credits:500,
        price:"¥3,980"
    },
    {
        name:"Enterprise",
        credits:2000,
        price:"¥12,800"
    }
];
export default function CreditsPage(){
    return (
        <section className="screen active">
            <div className="page-head">
                <h1 className="page-title">
                    クレジット購入
                </h1>
            </div>
            <div className="credit-grid">
                {
                    plans.map(plan=>(
                        <div
                            className="credit-card"
                            key={plan.name}
                        >
                            <h3>
                                {plan.name}
                            </h3>
                            <div className="credit-number">
                                {plan.credits}
                            </div>
                            <div>
                                {plan.price}
                            </div>
                            <button className="btn btn-primary">
                                購入
                            </button>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}