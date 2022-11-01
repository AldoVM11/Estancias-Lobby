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
    $aio_empty_object
} from '../scripts/interfaces';
import {
    ViewChild
} from '@angular/core';
declare var google: any;
@Component({
    templateUrl: 'Map.html',
    selector: 'page-map',
    styleUrls: ['Map.scss']
})
export class Map {
    public cities: any;
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
    @ViewChild('j_69', {
        static: false
    }) public j_69;
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef) {
        this.aioChangeDetector = this.$aio_changeDetector;
    }
    ionViewDidEnter() {
        this.pageIonViewDidEnter__j_67();
    }
    async pageIonViewDidEnter__j_67(event ? , currentItem ? ) {
        let __aio_tmp_val__: any;
        /* Invoke data service */
        this.invokeService_getCities();
    }
    async searchIonChange__j_69(event ? , currentItem ? ) {
        let __aio_tmp_val__: any;
        /* Invoke data service */
        this.invokeService_getCities();
    }
    private $aio_dataServices = {
        "getCities": "invokeService_getCities"
    }
    invokeService_getCities(cb ? : Function) {
        this.Apperyio.getService("GetCities").then(
            async (service) => {
                if (!service) {
                    console.log("Error. Service was not found.");
                    return;
                }
                let data = {};
                let __aio_tmp_val__: any;
                this.$aio_changeDetector.detectChanges();
                /* Mapping */
                data = this.$aio_mappingHelper.updateData(data, ["query"], this.$aio_mappingHelper.getComponentPropValue.call(this, 'j_69', 'ionic5search', 'value'));
                service.execute({
                    data: data
                }).subscribe(
                    /* onsuccess */
                    async (res: any) => {
                        let mappingData: any = {};
                        /* Mapping */
                        mappingData.j_73__visible = () => ((value) => {
                            return !value.length;
                        })(this.$aio_mappingHelper.getSubdata(res, []));
                        (() => {
                            let mappingDataj_71 = typeof mappingData.j_71 === "function" ? mappingData.j_71() : [];
                            mappingData.j_71 = () => {
                                let parentArray = this.$aio_mappingHelper.getSubdata(res, [], []);
                                mappingDataj_71.splice(parentArray.length);
                                parentArray.forEach((v, i) => {
                                    mappingDataj_71[i] = mappingDataj_71[i] || {};
                                    let result__j_71: any = mappingDataj_71[i];
                                    result__j_71.itemData = v;
                                    result__j_71.itemDataParent = parentArray;
                                    result__j_71.j_72__text = this.$aio_mappingHelper.getSubdata(v, ["name"]);
                                });
                                return mappingDataj_71;
                            };
                        })();
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