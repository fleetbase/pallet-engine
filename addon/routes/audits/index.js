import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class AuditsIndexRoute extends Route {
    @service store;

    queryParams = {
        page: { refreshModel: true },
        limit: { refreshModel: true },
        sort: { refreshModel: true },
        query: { refreshModel: true },
        status: { refreshModel: true },
    };

    model(params) {
        return this.store.query('audit', params);
    }
}
