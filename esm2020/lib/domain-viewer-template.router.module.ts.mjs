import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ParentComponent } from "./components/parent/parent.component";
import { ContentComponent } from "./components/parent/content/content.component";
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const routes = [{
        path: '', component: ParentComponent,
        children: [
            {
                path: '',
                component: ContentComponent,
            }
        ]
    }];
export class DomainViewerTemplateRouterModule {
}
DomainViewerTemplateRouterModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: DomainViewerTemplateRouterModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DomainViewerTemplateRouterModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: DomainViewerTemplateRouterModule, imports: [CommonModule, i1.RouterModule] });
DomainViewerTemplateRouterModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: DomainViewerTemplateRouterModule, imports: [CommonModule, RouterModule.forChild(routes)] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: DomainViewerTemplateRouterModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, RouterModule.forChild(routes)]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLXZpZXdlci10ZW1wbGF0ZS5yb3V0ZXIubW9kdWxlLnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvZG9tYWluLXZpZXdlci10ZW1wbGF0ZS9zcmMvbGliL2RvbWFpbi12aWV3ZXItdGVtcGxhdGUucm91dGVyLm1vZHVsZS50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxZQUFZLEVBQVMsTUFBTSxpQkFBaUIsQ0FBQztBQUNyRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQ3JFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLCtDQUErQyxDQUFDOzs7QUFFL0UsTUFBTSxNQUFNLEdBQVcsQ0FBQztRQUN0QixJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxlQUFlO1FBQ3BDLFFBQVEsRUFBRTtZQUNSO2dCQUNFLElBQUksRUFBRSxFQUFFO2dCQUNSLFNBQVMsRUFBRSxnQkFBZ0I7YUFDNUI7U0FBQztLQUNMLENBQUMsQ0FBQTtBQU1GLE1BQU0sT0FBTyxnQ0FBZ0M7OzZIQUFoQyxnQ0FBZ0M7OEhBQWhDLGdDQUFnQyxZQUZqQyxZQUFZOzhIQUVYLGdDQUFnQyxZQUZqQyxZQUFZLEVBQUUsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7MkZBRTFDLGdDQUFnQztrQkFINUMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDdkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtSb3V0ZXJNb2R1bGUsIFJvdXRlc30gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7UGFyZW50Q29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL3BhcmVudC9wYXJlbnQuY29tcG9uZW50XCI7XG5pbXBvcnQge0NvbnRlbnRDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvcGFyZW50L2NvbnRlbnQvY29udGVudC5jb21wb25lbnRcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbe1xuICBwYXRoOiAnJywgY29tcG9uZW50OiBQYXJlbnRDb21wb25lbnQsXG4gIGNoaWxkcmVuOiBbXG4gICAge1xuICAgICAgcGF0aDogJycsXG4gICAgICBjb21wb25lbnQ6IENvbnRlbnRDb21wb25lbnQsXG4gICAgfV1cbn1dXG5cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldXG59KVxuZXhwb3J0IGNsYXNzIERvbWFpblZpZXdlclRlbXBsYXRlUm91dGVyTW9kdWxlIHtcblxufVxuIl19