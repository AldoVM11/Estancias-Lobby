import {
    Component
} from '@angular/core';
import {
    ChangeDetectorRef
} from '@angular/core';
import {
    ApperyioHelperService
} from '../scripts/apperyio/apperyio_helper';
import {
    ApperyioMappingHelperService
} from '../scripts/apperyio/apperyio_mapping_helper';
import {
    ViewChild
} from '@angular/core';
import {
    MessagesModel_0
} from '../scripts/interfaces';
@Component({
    templateUrl: 'Chat.html',
    selector: 'page-chat',
    styleUrls: ['Chat.scss']
})
export class Chat {
    public messages: MessagesModel_0 = [{
            "time": "12:15 PM",
            "message": "Hello. How are you today?",
            "me": false
        },
        {
            "time": "12:15 PM",
            "message": "Hello. How are you today?",
            "me": true
        },
        {
            "time": "12:15 PM",
            "message": "Hello. How are you today?",
            "me": false
        }
    ];
    public text: string;
    @ViewChild('content', {
        static: false
    }) public content: any;
    public companionFirstName: string = 'John';
    public companionLastName: string = 'Doe';
    public aioChangeDetector: ChangeDetectorRef;
    public currentItem: any = null;
    public mappingData: any = {};
    public __getMapping(_currentItem, property, defaultValue, isVariable ? , isSelected ? ) {
        return this.$aio_mappingHelper.getMapping(this.mappingData, _currentItem, property, defaultValue, isVariable, isSelected);
    }
    public __isPropertyInMapping(_currentItem, property) {
        return this.$aio_mappingHelper.isPropertyInMapping(this.mappingData, _currentItem, property);
    }
    public __setMapping(data: any = {}, keyName: string, propName ? : string): void {
        const changes = data.detail || {};
        if (propName) {
            this.mappingData = this.$aio_mappingHelper.updateData(this.mappingData, [keyName], changes[propName]);
        } else {
            this.mappingData = this.$aio_mappingHelper.updateData(this.mappingData, [keyName], changes.value);
        }
        this.$aio_changeDetector.detectChanges();
    }
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef) {
        this.aioChangeDetector = this.$aio_changeDetector;
    }
    ionViewDidEnter() {
        this.pageIonViewDidEnter__j_34();
    }
    async pageIonViewDidEnter__j_34(event ? , currentItem ? ) {
        let mappingData: any = {};
        let __aio_tmp_val__: any;
        /* Mapping */
        mappingData.j_58__text = () => this.$aio_mappingHelper.getSubdata(this.companionFirstName, []);
        mappingData.j_59__text = () => this.$aio_mappingHelper.getSubdata(this.companionLastName, []);
        /* Mapping */
        mappingData.j_38__text = () => this.$aio_mappingHelper.getSubdata(this.companionFirstName, []);
        (() => {
            let mappingDataj_36 = typeof mappingData.j_36 === "function" ? mappingData.j_36() : [];
            mappingData.j_36 = () => {
                let parentArray = this.$aio_mappingHelper.getSubdata(this.messages, [], []);
                mappingDataj_36.splice(parentArray.length);
                parentArray.forEach((v, i) => {
                    mappingDataj_36[i] = mappingDataj_36[i] || {};
                    let result__j_36: any = mappingDataj_36[i];
                    result__j_36.itemData = v;
                    result__j_36.itemDataParent = parentArray;
                    result__j_36.j_37__visible = ((value) => {
                        return !value;
                    })(this.$aio_mappingHelper.getSubdata(v, ["me"]));
                    result__j_36.j_42__visible = this.$aio_mappingHelper.getSubdata(v, ["me"]);
                    result__j_36.j_39__text = this.$aio_mappingHelper.getSubdata(v, ["time"]);
                    result__j_36.j_40__text = this.$aio_mappingHelper.getSubdata(v, ["message"]);
                    result__j_36.j_44__text = this.$aio_mappingHelper.getSubdata(v, ["time"]);
                    result__j_36.j_45__text = this.$aio_mappingHelper.getSubdata(v, ["message"]);
                    result__j_36.j_38__text = typeof mappingData.j_38__text === "function" ? mappingData.j_38__text() : mappingData.j_38__text;
                });
                return mappingDataj_36;
            };
        })();
        this.mappingData = { ...this.mappingData,
            ...mappingData
        };
    }
    async sendbuttonClick__j_50(event ? , currentItem ? ) {
        let __aio_tmp_val__: any;
        /* Run TypeScript */
        this.messages.push({
            me: true,
            message: this.text,
            time: new Date().toLocaleTimeString(),
        });
        let message = 'Repeating what you say ' + this.text;
        this.messages.push({
            me: false,
            message: message,
            time: new Date().toLocaleTimeString()
        });
        this.text = '';
        setTimeout(() => this.content.scrollToBottom(500), 100);
    }
}