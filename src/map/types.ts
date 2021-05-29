import * as L from 'leaflet';
import 'leaflet.markercluster';
import '@sersol/leaflet-plugins/leaflet-fullscreen';

export interface LatLng {
    lat: number;
    lng: number;
}

/**
 * @description
 * Interface que representa al objeto OpenId usado para autenticarse con la API de SER
 */
export interface LatLng2LatLngOptions {
    from: {
        lat: number,
        lng: number
    };
    to: {
        lat: number,
        lng: number
    };
}

export interface CenterPoint {
    lat: number;
    lng: number;
    offset_x?: number;
    offset_y?: number;
    preserve_zoom?: boolean;
    zoom?: number;
}

export interface LeafletMapOptions {
    container: string;
    initialView?: {
        lat?: number;
        lng?: number;
        zoom?: number;
    };
    clusterMarkers?: {
        enable?: boolean;
        config?: L.MarkerClusterGroupOptions;
    };
    layers?: any;
    mapOptions?: L.MapOptions;
    fullscreen?: L.Control.FullscreenOptions;
    zoomControl?: boolean;
    zoom?: L.Control.ZoomOptions;
    layersControl?: boolean;
    layersOptions?: L.Control.LayersOptions;
    mousePositionOptions?: L.Control.MousePositionOptions;
}

export interface LeafletPadding {
    paddingTopLeft?: {
        x?: number;
        y?: number;
    };
    paddingBottomRight?: {
        x?: number;
        y?: number;
    };
}
