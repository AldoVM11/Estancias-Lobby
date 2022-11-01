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
    UserModel
} from '../scripts/interfaces';
import {
    ViewChild
} from '@angular/core';
@Component({
    templateUrl: 'Profile.html',
    selector: 'page-profile',
    styleUrls: ['Profile.scss']
})
export class Profile {
    public viewMode: boolean = true;
    public user: UserModel = {
        "firstName": "John",
        "lastName": "Doe",
        "job": "Product Designer",
        "photo": "./assets/images/avatar.jpg",
        "phone": "+1 (000) 000-00000",
        "gender": "Male",
        "address": "402 West Lake Forest St. Palm Beach Gardens, FL 33410",
        "email": "john.doe@email.com",
        "dateOfBirth": "1980-01-01"
    };
    public savedPhoto: string;
    public aioChangeDetector: ChangeDetectorRef;
    public currentItem: any = null;
    public mappingData: any = {
        "j_86__visible": false,
    };
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
    @ViewChild('j_86', {
        static: false
    }) public j_86;
    @ViewChild('j_118_el', {
        static: false
    }) public j_118_el;
    @ViewChild('j_119_el', {
        static: false
    }) public j_119_el;
    @ViewChild('j_121_el', {
        static: false
    }) public j_121_el;
    @ViewChild('j_128_el', {
        static: false
    }) public j_128_el;
    @ViewChild('j_129_el', {
        static: false
    }) public j_129_el;
    @ViewChild('j_132_el', {
        static: false
    }) public j_132_el;
    @ViewChild('j_130_el', {
        static: false
    }) public j_130_el;
    @ViewChild('j_138_el', {
        static: false
    }) public j_138_el;
    @ViewChild('form', {
        static: true
    }) public form;
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef) {
        this.aioChangeDetector = this.$aio_changeDetector;
    }
    ionViewDidEnter() {
        this.pageIonViewDidEnter__j_80();
    }
    async pageIonViewDidEnter__j_80(event ? , currentItem ? ) {
        let mappingData: any = {};
        let __aio_tmp_val__: any;
        /* Mapping */
        mappingData.j_145__visible = () => this.$aio_mappingHelper.getSubdata(this.viewMode, []);
        mappingData.j_146__visible = () => ((value) => {
            return !value;
        })(this.$aio_mappingHelper.getSubdata(this.viewMode, []));
        mappingData.j_117__visible = () => ((value) => {
            return !value;
        })(this.$aio_mappingHelper.getSubdata(this.viewMode, []));
        mappingData.j_87__visible = () => this.$aio_mappingHelper.getSubdata(this.viewMode, []);
        mappingData.j_90__text = () => this.$aio_mappingHelper.getSubdata(this.user, ["job"]);
        mappingData.j_88__text = () => this.$aio_mappingHelper.getSubdata(this.user, ["firstName"]);
        mappingData.j_83__imageSrc = () => this.$aio_mappingHelper.getSubdata(this.user, ["photo"]);
        mappingData.j_84__visible = () => ((value) => {
            return !value;
        })(this.$aio_mappingHelper.getSubdata(this.viewMode, []));
        mappingData.j_89__text = () => this.$aio_mappingHelper.getSubdata(this.user, ["lastName"]);
        mappingData.j_96__text = () => this.$aio_mappingHelper.getSubdata(this.user, ["phone"]);
        mappingData.j_101__text = () => this.$aio_mappingHelper.getSubdata(this.user, ["email"]);
        mappingData.j_111__text = () => ((value) => {
            return value.substr(0, 10);
        })(this.$aio_mappingHelper.getSubdata(this.user, ["dateOfBirth"]));
        mappingData.j_116__text = () => this.$aio_mappingHelper.getSubdata(this.user, ["address"]);
        mappingData.j_106__text = () => this.$aio_mappingHelper.getSubdata(this.user, ["gender"]);
        this.mappingData = { ...this.mappingData,
            ...mappingData
        };
    }
    async fileinputIonChange__j_86(event ? , currentItem ? ) {
        let __aio_tmp_val__: any;
        /* Invoke data service */
        this.invokeService_FileReadService1();
    }
    async savebuttonClick__j_139(event ? , currentItem ? ) {
        let mappingData: any = {};
        let __aio_tmp_val__: any;
        /* Set variable */
        this.viewMode = true;
        /* Mapping */
        this.user = this.$aio_mappingHelper.updateData(this.user, ["firstName"], this.$aio_mappingHelper.getComponentPropValue.call(this, 'j_118', 'ionic5input', 'value'));
        this.user = this.$aio_mappingHelper.updateData(this.user, ["lastName"], this.$aio_mappingHelper.getComponentPropValue.call(this, 'j_119', 'ionic5input', 'value'));
        this.user = this.$aio_mappingHelper.updateData(this.user, ["job"], this.$aio_mappingHelper.getComponentPropValue.call(this, 'j_121', 'ionic5selectitem', 'value'));
        this.user = this.$aio_mappingHelper.updateData(this.user, ["phone"], this.$aio_mappingHelper.getComponentPropValue.call(this, 'j_128', 'ionic5input', 'value'));
        this.user = this.$aio_mappingHelper.updateData(this.user, ["email"], this.$aio_mappingHelper.getComponentPropValue.call(this, 'j_129', 'ionic5input', 'value'));
        this.user = this.$aio_mappingHelper.updateData(this.user, ["gender"], this.$aio_mappingHelper.getComponentPropValue.call(this, 'j_132', 'ionic5selectitem', 'value'));
        this.user = this.$aio_mappingHelper.updateData(this.user, ["dateOfBirth"], ((value) => {
            return value.substr(0, 10);
        })(this.$aio_mappingHelper.getComponentPropValue.call(this, 'j_130', 'ionic5datetime', 'value')));
        this.user = this.$aio_mappingHelper.updateData(this.user, ["address"], this.$aio_mappingHelper.getComponentPropValue.call(this, 'j_138', 'ionic5input', 'value'));
        this.mappingData = { ...this.mappingData,
            ...mappingData
        };
    }
    async editbuttonClick__j_145(event ? , currentItem ? ) {
        let mappingData: any = {};
        let __aio_tmp_val__: any;
        /* Set variable */
        this.viewMode = false;
        /* Mapping */
        mappingData.j_118__value = () => this.$aio_mappingHelper.getSubdata(this.user, ["firstName"]);
        mappingData.j_119__value = () => this.$aio_mappingHelper.getSubdata(this.user, ["lastName"]);
        this.savedPhoto = this.$aio_mappingHelper.updateData(this.savedPhoto, [], this.$aio_mappingHelper.getSubdata(this.user, ["photo"]));
        mappingData.j_121__value = () => this.$aio_mappingHelper.getSubdata(this.user, ["job"]);
        mappingData.j_128__value = () => this.$aio_mappingHelper.getSubdata(this.user, ["phone"]);
        mappingData.j_132__value = () => this.$aio_mappingHelper.getSubdata(this.user, ["gender"]);
        mappingData.j_130__value = () => this.$aio_mappingHelper.getSubdata(this.user, ["dateOfBirth"]);
        mappingData.j_138__value = () => this.$aio_mappingHelper.getSubdata(this.user, ["address"]);
        mappingData.j_129__value = () => this.$aio_mappingHelper.getSubdata(this.user, ["email"]);
        this.mappingData = { ...this.mappingData,
            ...mappingData
        };
    }
    async cancelbuttonClick__j_146(event ? , currentItem ? ) {
        let mappingData: any = {};
        let __aio_tmp_val__: any;
        /* Set variable */
        this.viewMode = true;
        /* Mapping */
        this.user = this.$aio_mappingHelper.updateData(this.user, ["photo"], this.$aio_mappingHelper.getSubdata(this.savedPhoto, []));
        this.mappingData = { ...this.mappingData,
            ...mappingData
        };
    }
    private $aio_dataServices = {
        "FileReadService1": "invokeService_FileReadService1"
    }
    invokeService_FileReadService1(cb ? : Function) {
        this.Apperyio.getService("FileReadService").then(
            async (service) => {
                if (!service) {
                    console.log("Error. Service was not found.");
                    return;
                }
                let data = {};
                let __aio_tmp_val__: any;
                this.$aio_changeDetector.detectChanges();
                data = this.$aio_mappingHelper.updateData(data, ["resultFormat"], 'DATA_URL');
                /* Mapping */
                data = this.$aio_mappingHelper.updateData(data, ["fileInput"], this.$aio_mappingHelper.getComponentPropValue.call(this, 'j_86', 'ionic5input', ''));
                service.execute({
                    data: data
                }).subscribe(
                    /* onsuccess */
                    async (res: any) => {
                        let mappingData: any = {};
                        /* Mapping */
                        this.user = this.$aio_mappingHelper.updateData(this.user, ["photo"], this.$aio_mappingHelper.getSubdata(res, ["data"]));
                        this.mappingData = { ...this.mappingData,
                            ...mappingData
                        };
                        if (cb && typeof cb === "function") cb(res);
                    },
                    (err: any) => {
                        console.log(err);
                    }
                )
            }
        );
    }
}