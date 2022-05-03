import React, { Component } from 'react';
import './ChangeLog.scss';
import _ from "lodash";


class ChangeLog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpanded: this.props.isExpanded,

        };
     }

    render() {
        const { issues, handleToggle, isExpanded } = this.props;
        const changes =  issues[0].changes ;
        const toggleChanges = isExpanded? changes:_.slice(issues[0].changes, 0, 3);
        const linkText = isExpanded ? "Close activity log ":"View full activity log ";
        const linkIcon = isExpanded ? <span className='icon'>&#9650;</span> : <span className='icon'>&#9660;</span>
        return (
            <div className='changelog-main-container'>
                <h1>Changelog</h1>
                <p className='subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet nisl vehicula, blandit magna vitae, porttitor sem. Sed ac euismod dui, at congue nisi</p>


                <div className='changes-container'>
                    <section className='changes-rapper'>
                        {toggleChanges.map(change =>
                            <p key={change.change_id} className={isExpanded?  null: "text"}>
                                <b>{`${change.author}: `}</b>
                                {change.change}
                            </p>
                        )}
                    </section>
                    <div className='bottom-rapper'>
                        {(changes.length - 3 > 0 && !isExpanded) ?
                            <p className='more-author-text'>
                                {`+${changes.length - 3} from ${changes[3].author}, ${changes[4].author} and ${changes.length - 5} others`}
                            </p>
                            :<p>   </p>
                        }
                        <button className='expand' onClick={handleToggle}>
                            {linkText}
                            {linkIcon}
                        </button>
                    </div>
                </div>

            </div>);
    }
}

export default ChangeLog;