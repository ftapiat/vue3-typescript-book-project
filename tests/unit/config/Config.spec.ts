import {expect} from "chai";
import {config} from "@/config";

describe('config', function () {
    it('instance should have "global" section', () => {
        expect(config).to.have.own.property('global');
    });

    it('instance should have "httpClient" section', () => {
        expect(config).to.have.own.property('httpClient');
    });

    it('instance should have "items" section', () => {
        expect(config).to.have.own.property('items');
    });

    describe('global', () => {
        const section = config.global;
    });

    describe('httpClient', () => {
        const section = config.httpClient;

        it('section should have "tokenKey" property', () => {
            expect(section).to.have.own.property('tokenKey');
        });
    });

    describe('apiClient', () => {
        const section = config.apiClient;

        it('section should have "type" property', () => {
            expect(section).to.have.own.property('type');
        });
    });

    describe('items', () => {
        const section = config.items;

        it('section should have "apiUrls" property', () => {
            expect(section).to.have.own.property('apiUrls');
        });

        describe('apiUrls', () => {
            const {apiUrls} = section;

            it('section should have "fetchItems" property', () => {
                expect(apiUrls).to.have.own.property('fetchItems');
                expect(apiUrls.fetchItems).to.be.an('string');
                expect(apiUrls.fetchItems).to.have.length.greaterThan(10);
            });
        });
    });
});