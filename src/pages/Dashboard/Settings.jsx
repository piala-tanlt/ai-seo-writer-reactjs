import { useState } from "react";
export default function SettingsPage(){
    const [settings,setSettings] = useState({
        autoPublish:false,
        aiModel:"gpt",
        language:"ja"
    });
    function update(key,value){
        setSettings({
            ...settings,
            [key]:value
        });
    }
    return (
        <section className="screen active">
            <div className="page-head">
                <h1 className="page-title">
                    設定
                </h1>
                <div className="page-desc">
                    AI SEO Writer 設定
                </div>
            </div>
            <div className="settings-card">
                <h3>
                    AI設定
                </h3>
                <label>
                    AIモデル
                    <select
                        value={settings.aiModel}
                        onChange={
                            e=>update(
                                "aiModel",
                                e.target.value
                            )
                        }
                    >
                        <option value="gpt">
                            GPT
                        </option>
                        <option value="claude">
                            Claude
                        </option>
                    </select>
                </label>
                <label>
                    記事言語
                    <select
                        value={settings.language}
                        onChange={
                            e=>update(
                                "language",
                                e.target.value
                            )
                        }
                    >
                        <option value="ja">
                            日本語
                        </option>
                        <option value="en">
                            English
                        </option>
                    </select>
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={
                            settings.autoPublish
                        }
                        onChange={
                            e=>update(
                                "autoPublish",
                                e.target.checked
                            )
                        }
                    />
                    自動公開する
                </label>
            </div>
        </section>
    );
}