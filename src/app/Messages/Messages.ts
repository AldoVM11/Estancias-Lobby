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
    MessagesModel
} from '../scripts/interfaces';
import {
    ViewChild
} from '@angular/core';
@Component({
    templateUrl: 'Messages.html',
    selector: 'page-messages',
    styleUrls: ['Messages.scss']
})
export class Messages {
    public recentConversations: MessagesModel = [{
            "avatar": "./assets/images/finn.jpg",
            "name": "Finn",
            "title": "I'm a big deal",
            "message": "Listen, I've had a pretty messed up day...",
            "time": "9:30 am"
        },
        {
            "avatar": "./assets/images/han.jpg",
            "name": "Han",
            "title": "Look, kid...",
            "message": "I've got enough on my plate as it is, and I...",
            "time": "10:00 am"
        },
        {
            "avatar": "./assets/images/rey.jpg",
            "name": "Rey",
            "title": "I can handle myself",
            "message": "You will remove these restraints and leave...",
            "time": "10:10 am"
        }, {
            "avatar": "./assets/images/luke.jpg",
            "name": "Luke",
            "title": "Your thoughts betray you",
            "message": "I feel the good in you, the conflict...",
            "time": "10:45 am"
        }
    ];
    public onlineMessages: MessagesModel = [{
            "avatar": "./assets/images/poe.jpg",
            "name": "Poe",
            "title": "New Ride",
            "message": "I just upgraded my X-Wing. Next time...",
            "time": "4:15 pm"
        },
        {
            "avatar": "./assets/images/ben.jpg",
            "name": "Ben",
            "title": "Move Along",
            "message": "These aren't the droids you're looking for...",
            "time": "4:30 pm"
        },
        {
            "avatar": "./assets/images/leia.jpg",
            "name": "Leia",
            "title": "You're My Only Hope",
            "message": "I've placed information vital to the survival...",
            "time": "5:05 pm"
        }, {
            "avatar": "./assets/images/yoda.jpg",
            "name": "Yoda",
            "title": "Size matters not",
            "message": "Do or do not. There is no try...",
            "time": "6:15 pm"
        }
    ];
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
        this.pageIonViewDidEnter__j_8();
    }
    async pageIonViewDidEnter__j_8(event ? , currentItem ? ) {
        let mappingData: any = {};
        let __aio_tmp_val__: any;
        /* Mapping */
        (() => {
            let mappingDataj_14 = typeof mappingData.j_14 === "function" ? mappingData.j_14() : [];
            mappingData.j_14 = () => {
                let parentArray = this.$aio_mappingHelper.getSubdata(this.recentConversations, [], []);
                mappingDataj_14.splice(parentArray.length);
                parentArray.forEach((v, i) => {
                    mappingDataj_14[i] = mappingDataj_14[i] || {};
                    let result__j_14: any = mappingDataj_14[i];
                    result__j_14.itemData = v;
                    result__j_14.itemDataParent = parentArray;
                    result__j_14.j_15__imageSrc = this.$aio_mappingHelper.getSubdata(v, ["avatar"]);
                    result__j_14.j_17__text = this.$aio_mappingHelper.getSubdata(v, ["name"]);
                    result__j_14.j_18__text = this.$aio_mappingHelper.getSubdata(v, ["title"]);
                    result__j_14.j_19__text = this.$aio_mappingHelper.getSubdata(v, ["message"]);
                    result__j_14.j_20__text = this.$aio_mappingHelper.getSubdata(v, ["time"]);
                });
                return mappingDataj_14;
            };
        })();
        (() => {
            let mappingDataj_24 = typeof mappingData.j_24 === "function" ? mappingData.j_24() : [];
            mappingData.j_24 = () => {
                let parentArray = this.$aio_mappingHelper.getSubdata(this.onlineMessages, [], []);
                mappingDataj_24.splice(parentArray.length);
                parentArray.forEach((v, i) => {
                    mappingDataj_24[i] = mappingDataj_24[i] || {};
                    let result__j_24: any = mappingDataj_24[i];
                    result__j_24.itemData = v;
                    result__j_24.itemDataParent = parentArray;
                    result__j_24.j_25__imageSrc = this.$aio_mappingHelper.getSubdata(v, ["avatar"]);
                    result__j_24.j_27__text = this.$aio_mappingHelper.getSubdata(v, ["name"]);
                    result__j_24.j_28__text = this.$aio_mappingHelper.getSubdata(v, ["title"]);
                    result__j_24.j_29__text = this.$aio_mappingHelper.getSubdata(v, ["message"]);
                    result__j_24.j_30__visible = this.$aio_mappingHelper.getSubdata(v, ["time"]);
                });
                return mappingDataj_24;
            };
        })();
        this.mappingData = { ...this.mappingData,
            ...mappingData
        };
    }
}