import Docs from './docs';
import React from 'react';
import { Tabs } from 'cabana-react';
export default function TabsDocs() {
    return (
        <Docs title="Tabs">
            Todo:
            <ul>
                <li>Tab with Icon</li>
            </ul>
            <Tabs>
                <div label="Movies">
                    See ya later, <em>Alligator</em>!
                </div>
                <div label="Music">
                    After 'while, <em>Crocodile</em>!
                </div>
                <div label="Photos">
                    Nothing to see here, this tab is <em>extinct</em>!
                </div>
            </Tabs>
        </Docs>
    );
}
