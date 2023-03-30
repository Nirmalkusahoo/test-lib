import { Component } from '@angular/core';
import { CommonHeaderBannerInput } from "@sap/falcon-ui-pedestal";
import * as i0 from "@angular/core";
import * as i1 from "@sap/falcon-ui-pedestal";
import * as i2 from "@angular/router";
export class ParentComponent {
    constructor(artifactDetailsService, route) {
        this.artifactDetailsService = artifactDetailsService;
        this.route = route;
        this.headerBannerInput = new CommonHeaderBannerInput();
        this.route.params.subscribe((params) => {
            this.artifactDetailsService
                // .getArtifactDetails(params['id'], ArtifactType.Event)
                .getArtifactDetails(params['id'], 'solutionapp') // artifactType should be added from  ArtifactType enum ex: ArtifactType.Event
                .subscribe((data) => {
                if (data) {
                    this.headerBannerInput.title = data.DisplayName;
                    this.headerBannerInput.shortText = data.ShortText;
                    this.headerBannerInput.iconName =
                        this.artifactDetailsService.getArtifactIconName(data.Type);
                    // eslint-disable-next-line
                    this.headerBannerInput.isShortTextHidden = true;
                }
            });
        });
    }
    ngOnInit() {
    }
}
ParentComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ParentComponent, deps: [{ token: i1.ArtifactDetailsService }, { token: i2.ActivatedRoute }], target: i0.ɵɵFactoryTarget.Component });
ParentComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: ParentComponent, selector: "lib-parent", ngImport: i0, template: "<lib-dts-common-header-banner\n  [input]=\"headerBannerInput\"\n></lib-dts-common-header-banner>\n<router-outlet></router-outlet>\n", styles: [""], dependencies: [{ kind: "component", type: i1.CommonHeaderBannerComponent, selector: "lib-dts-common-header-banner", inputs: ["input"], outputs: ["callFunction"] }, { kind: "directive", type: i2.RouterOutlet, selector: "router-outlet", outputs: ["activate", "deactivate", "attach", "detach"], exportAs: ["outlet"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ParentComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-parent', template: "<lib-dts-common-header-banner\n  [input]=\"headerBannerInput\"\n></lib-dts-common-header-banner>\n<router-outlet></router-outlet>\n" }]
        }], ctorParameters: function () { return [{ type: i1.ArtifactDetailsService }, { type: i2.ActivatedRoute }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2RvbWFpbi12aWV3ZXItdGVtcGxhdGUvc3JjL2xpYi9jb21wb25lbnRzL3BhcmVudC9wYXJlbnQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZG9tYWluLXZpZXdlci10ZW1wbGF0ZS9zcmMvbGliL2NvbXBvbmVudHMvcGFyZW50L3BhcmVudC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFHTCx1QkFBdUIsRUFFeEIsTUFBTSx5QkFBeUIsQ0FBQzs7OztBQVFqQyxNQUFNLE9BQU8sZUFBZTtJQUkxQixZQUFvQixzQkFBNkMsRUFBUyxLQUFxQjtRQUEzRSwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXVCO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFIeEYsc0JBQWlCLEdBQ3RCLElBQUksdUJBQXVCLEVBQUUsQ0FBQztRQUc5QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFjLEVBQUUsRUFBRTtZQUM3QyxJQUFJLENBQUMsc0JBQXNCO2dCQUN6Qix3REFBd0Q7aUJBQ3ZELGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxhQUFhLENBQUMsQ0FBQyw4RUFBOEU7aUJBQzlILFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUNsQixJQUFJLElBQUksRUFBRTtvQkFDUixJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7b0JBQ2hELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztvQkFDbEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVE7d0JBQzdCLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzdELDJCQUEyQjtvQkFDM0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztpQkFDakQ7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFFBQVE7SUFDUixDQUFDOzs0R0F2QlUsZUFBZTtnR0FBZixlQUFlLGtEQ2Q1QixxSUFJQTsyRkRVYSxlQUFlO2tCQUwzQixTQUFTOytCQUNFLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQXJ0aWZhY3REZXRhaWxzU2VydmljZSxcbiAgQXJ0aWZhY3RUeXBlLFxuICBDb21tb25IZWFkZXJCYW5uZXJJbnB1dCxcbiAgSUNvbW1vbkhlYWRlckJhbm5lcklucHV0XG59IGZyb20gXCJAc2FwL2ZhbGNvbi11aS1wZWRlc3RhbFwiO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1wYXJlbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFyZW50LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGFyZW50LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQYXJlbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgaGVhZGVyQmFubmVySW5wdXQ6IElDb21tb25IZWFkZXJCYW5uZXJJbnB1dCA9XG4gICAgbmV3IENvbW1vbkhlYWRlckJhbm5lcklucHV0KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhcnRpZmFjdERldGFpbHNTZXJ2aWNlOkFydGlmYWN0RGV0YWlsc1NlcnZpY2UscHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsKSB7XG4gICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXM6IFBhcmFtcykgPT4ge1xuICAgICAgdGhpcy5hcnRpZmFjdERldGFpbHNTZXJ2aWNlXG4gICAgICAgIC8vIC5nZXRBcnRpZmFjdERldGFpbHMocGFyYW1zWydpZCddLCBBcnRpZmFjdFR5cGUuRXZlbnQpXG4gICAgICAgIC5nZXRBcnRpZmFjdERldGFpbHMocGFyYW1zWydpZCddLCAnc29sdXRpb25hcHAnKSAvLyBhcnRpZmFjdFR5cGUgc2hvdWxkIGJlIGFkZGVkIGZyb20gIEFydGlmYWN0VHlwZSBlbnVtIGV4OiBBcnRpZmFjdFR5cGUuRXZlbnRcbiAgICAgICAgLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICB0aGlzLmhlYWRlckJhbm5lcklucHV0LnRpdGxlID0gZGF0YS5EaXNwbGF5TmFtZTtcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyQmFubmVySW5wdXQuc2hvcnRUZXh0ID0gZGF0YS5TaG9ydFRleHQ7XG4gICAgICAgICAgICB0aGlzLmhlYWRlckJhbm5lcklucHV0Lmljb25OYW1lID1cbiAgICAgICAgICAgICAgdGhpcy5hcnRpZmFjdERldGFpbHNTZXJ2aWNlLmdldEFydGlmYWN0SWNvbk5hbWUoZGF0YS5UeXBlKTtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgdGhpcy5oZWFkZXJCYW5uZXJJbnB1dC5pc1Nob3J0VGV4dEhpZGRlbiA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbn1cbiIsIjxsaWItZHRzLWNvbW1vbi1oZWFkZXItYmFubmVyXG4gIFtpbnB1dF09XCJoZWFkZXJCYW5uZXJJbnB1dFwiXG4+PC9saWItZHRzLWNvbW1vbi1oZWFkZXItYmFubmVyPlxuPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuIl19