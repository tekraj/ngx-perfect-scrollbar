import { InjectionToken } from '@angular/core';
export var PERFECT_SCROLLBAR_CONFIG = new InjectionToken('PERFECT_SCROLLBAR_CONFIG');
var Geometry = /** @class */ (function () {
    function Geometry(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    return Geometry;
}());
export { Geometry };
var Position = /** @class */ (function () {
    function Position(x, y) {
        this.x = x;
        this.y = y;
    }
    return Position;
}());
export { Position };
export var PerfectScrollbarEvents = [
    'psScrollY',
    'psScrollX',
    'psScrollUp',
    'psScrollDown',
    'psScrollLeft',
    'psScrollRight',
    'psYReachEnd',
    'psYReachStart',
    'psXReachEnd',
    'psXReachStart'
];
var PerfectScrollbarConfig = /** @class */ (function () {
    function PerfectScrollbarConfig(config) {
        if (config === void 0) { config = {}; }
        this.assign(config);
    }
    PerfectScrollbarConfig.prototype.assign = function (config) {
        if (config === void 0) { config = {}; }
        for (var key in config) {
            this[key] = config[key];
        }
    };
    return PerfectScrollbarConfig;
}());
export { PerfectScrollbarConfig };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyZmVjdC1zY3JvbGxiYXIuaW50ZXJmYWNlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1wZXJmZWN0LXNjcm9sbGJhci8iLCJzb3VyY2VzIjpbImxpYi9wZXJmZWN0LXNjcm9sbGJhci5pbnRlcmZhY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0MsTUFBTSxDQUFDLElBQU0sd0JBQXdCLEdBQUcsSUFBSSxjQUFjLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQUV2RjtJQU9FLGtCQUFZLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVM7UUFDcEQsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDYixDQUFDO0lBQ0gsZUFBQztBQUFELENBQUMsQUFiRCxJQWFDOztBQUVEO0lBSUUsa0JBQVksQ0FBMkIsRUFBRSxDQUEyQjtRQUNsRSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUNILGVBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQzs7QUFLRCxNQUFNLENBQUMsSUFBTSxzQkFBc0IsR0FBNEI7SUFDN0QsV0FBVztJQUNYLFdBQVc7SUFFWCxZQUFZO0lBQ1osY0FBYztJQUNkLGNBQWM7SUFDZCxlQUFlO0lBRWYsYUFBYTtJQUNiLGVBQWU7SUFDZixhQUFhO0lBQ2IsZUFBZTtDQUNoQixDQUFDO0FBdUJGO0lBb0JFLGdDQUFZLE1BQTRDO1FBQTVDLHVCQUFBLEVBQUEsV0FBNEM7UUFDdEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRU0sdUNBQU0sR0FBYixVQUFjLE1BQTRDO1FBQTVDLHVCQUFBLEVBQUEsV0FBNEM7UUFDeEQsS0FBSyxJQUFNLEdBQUcsSUFBSSxNQUFNLEVBQUU7WUFDeEIsSUFBSSxDQUFDLEdBQW1DLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBNEMsQ0FBVSxDQUFDO1NBQzNHO0lBQ0gsQ0FBQztJQUNILDZCQUFDO0FBQUQsQ0FBQyxBQTdCRCxJQTZCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjb25zdCBQRVJGRUNUX1NDUk9MTEJBUl9DT05GSUcgPSBuZXcgSW5qZWN0aW9uVG9rZW4oJ1BFUkZFQ1RfU0NST0xMQkFSX0NPTkZJRycpO1xuXG5leHBvcnQgY2xhc3MgR2VvbWV0cnkge1xuICBwdWJsaWMgeDogbnVtYmVyO1xuICBwdWJsaWMgeTogbnVtYmVyO1xuXG4gIHB1YmxpYyB3OiBudW1iZXI7XG4gIHB1YmxpYyBoOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIHc6IG51bWJlciwgaDogbnVtYmVyKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMudyA9IHc7XG4gICAgdGhpcy5oID0gaDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUG9zaXRpb24ge1xuICBwdWJsaWMgeDogbnVtYmVyIHwgJ3N0YXJ0JyB8ICdlbmQnO1xuICBwdWJsaWMgeTogbnVtYmVyIHwgJ3N0YXJ0JyB8ICdlbmQnO1xuXG4gIGNvbnN0cnVjdG9yKHg6IG51bWJlciB8ICdzdGFydCcgfCAnZW5kJywgeTogbnVtYmVyIHwgJ3N0YXJ0JyB8ICdlbmQnKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFBlcmZlY3RTY3JvbGxiYXJFdmVudCA9ICdwc1Njcm9sbFknIHwgJ3BzU2Nyb2xsWCcgfCAncHNTY3JvbGxVcCd8ICdwc1Njcm9sbERvd24nIHxcbiAgJ3BzU2Nyb2xsTGVmdCcgfCAncHNTY3JvbGxSaWdodCcgfCAncHNZUmVhY2hFbmQnIHwgJ3BzWVJlYWNoU3RhcnQnIHwgJ3BzWFJlYWNoRW5kJyB8ICdwc1hSZWFjaFN0YXJ0JztcblxuZXhwb3J0IGNvbnN0IFBlcmZlY3RTY3JvbGxiYXJFdmVudHM6IFBlcmZlY3RTY3JvbGxiYXJFdmVudFtdID0gW1xuICAncHNTY3JvbGxZJyxcbiAgJ3BzU2Nyb2xsWCcsXG5cbiAgJ3BzU2Nyb2xsVXAnLFxuICAncHNTY3JvbGxEb3duJyxcbiAgJ3BzU2Nyb2xsTGVmdCcsXG4gICdwc1Njcm9sbFJpZ2h0JyxcblxuICAncHNZUmVhY2hFbmQnLFxuICAncHNZUmVhY2hTdGFydCcsXG4gICdwc1hSZWFjaEVuZCcsXG4gICdwc1hSZWFjaFN0YXJ0J1xuXTtcblxuZXhwb3J0IGludGVyZmFjZSBQZXJmZWN0U2Nyb2xsYmFyQ29uZmlnSW50ZXJmYWNlIHtcbiAgaGFuZGxlcnM/OiBzdHJpbmdbXTtcblxuICB3aGVlbFNwZWVkPzogbnVtYmVyO1xuICBzd2lwZUVhc2luZz86IGJvb2xlYW47XG5cbiAgc3VwcHJlc3NTY3JvbGxYPzogYm9vbGVhbjtcbiAgc3VwcHJlc3NTY3JvbGxZPzogYm9vbGVhbjtcblxuICB3aGVlbFByb3BhZ2F0aW9uPzogYm9vbGVhbjtcbiAgdXNlQm90aFdoZWVsQXhlcz86IGJvb2xlYW47XG5cbiAgc2Nyb2xsaW5nVGhyZXNob2xkPzogbnVtYmVyO1xuXG4gIG1pblNjcm9sbGJhckxlbmd0aD86IG51bWJlcjtcbiAgbWF4U2Nyb2xsYmFyTGVuZ3RoPzogbnVtYmVyO1xuXG4gIHNjcm9sbFhNYXJnaW5PZmZzZXQ/OiBudW1iZXI7XG4gIHNjcm9sbFlNYXJnaW5PZmZzZXQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBQZXJmZWN0U2Nyb2xsYmFyQ29uZmlnIGltcGxlbWVudHMgUGVyZmVjdFNjcm9sbGJhckNvbmZpZ0ludGVyZmFjZSB7XG4gIHB1YmxpYyBoYW5kbGVycz86IHN0cmluZ1tdO1xuXG4gIHB1YmxpYyB3aGVlbFNwZWVkPzogbnVtYmVyO1xuICBwdWJsaWMgc3dpcGVFYXNpbmc/OiBib29sZWFuO1xuXG4gIHB1YmxpYyBzdXBwcmVzc1Njcm9sbFg/OiBib29sZWFuO1xuICBwdWJsaWMgc3VwcHJlc3NTY3JvbGxZPzogYm9vbGVhbjtcblxuICBwdWJsaWMgd2hlZWxQcm9wYWdhdGlvbj86IGJvb2xlYW47XG4gIHB1YmxpYyB1c2VCb3RoV2hlZWxBeGVzPzogYm9vbGVhbjtcblxuICBwdWJsaWMgc2Nyb2xsaW5nVGhyZXNob2xkPzogbnVtYmVyO1xuXG4gIHB1YmxpYyBtaW5TY3JvbGxiYXJMZW5ndGg/OiBudW1iZXI7XG4gIHB1YmxpYyBtYXhTY3JvbGxiYXJMZW5ndGg/OiBudW1iZXI7XG5cbiAgcHVibGljIHNjcm9sbFhNYXJnaW5PZmZzZXQ/OiBudW1iZXI7XG4gIHB1YmxpYyBzY3JvbGxZTWFyZ2luT2Zmc2V0PzogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogUGVyZmVjdFNjcm9sbGJhckNvbmZpZ0ludGVyZmFjZSA9IHt9KSB7XG4gICAgdGhpcy5hc3NpZ24oY29uZmlnKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3NpZ24oY29uZmlnOiBQZXJmZWN0U2Nyb2xsYmFyQ29uZmlnSW50ZXJmYWNlID0ge30pIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBjb25maWcpIHtcbiAgICAgIHRoaXNba2V5IGFzIGtleW9mIFBlcmZlY3RTY3JvbGxiYXJDb25maWddID0gY29uZmlnW2tleSBhcyBrZXlvZiBQZXJmZWN0U2Nyb2xsYmFyQ29uZmlnSW50ZXJmYWNlXSBhcyBuZXZlcjtcbiAgICB9XG4gIH1cbn1cbiJdfQ==