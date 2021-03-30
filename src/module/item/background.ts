import { ABCItemPF2e } from './abc';
import { BackgroundData } from './data-definitions';

export class BackgroundPF2e extends ABCItemPF2e {}

export interface BackgroundPF2e {
    data: BackgroundData;
    _data: BackgroundData;
}
