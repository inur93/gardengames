//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.16.0.0 (NJsonSchema v10.7.1.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming

import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, CancelToken } from 'axios';

export class Client {
    private instance: AxiosInstance;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, instance?: AxiosInstance) {

        this.instance = instance ? instance : axios.create();

        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "/";

    }

    /**
     * @return Ok
     */
    getGames(  cancelToken?: CancelToken | undefined): Promise<Game[]> {
        let url_ = this.baseUrl + "/api/games";
        url_ = url_.replace(/[?&]$/, "");

        let options_: AxiosRequestConfig = {
            method: "GET",
            url: url_,
            headers: {
                "Accept": "application/json"
            },
            cancelToken
        };

        return this.instance.request(options_).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processGetGames(_response);
        });
    }

    protected processGetGames(response: AxiosResponse): Promise<Game[]> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(Game.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return Promise.resolve<Game[]>(result200);

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<Game[]>(null as any);
    }

    /**
     * @return Ok
     */
    createGame(body: Name_ , cancelToken?: CancelToken | undefined): Promise<Game> {
        let url_ = this.baseUrl + "/api/games";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_: AxiosRequestConfig = {
            data: content_,
            method: "POST",
            url: url_,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            cancelToken
        };

        return this.instance.request(options_).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processCreateGame(_response);
        });
    }

    protected processCreateGame(response: AxiosResponse): Promise<Game> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            result200 = Game.fromJS(resultData200);
            return Promise.resolve<Game>(result200);

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<Game>(null as any);
    }

    /**
     * @return Ok
     */
    createScore(body: CreateScore , cancelToken?: CancelToken | undefined): Promise<Score[]> {
        let url_ = this.baseUrl + "/api/games/{id}/score";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_: AxiosRequestConfig = {
            data: content_,
            method: "POST",
            url: url_,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            cancelToken
        };

        return this.instance.request(options_).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processCreateScore(_response);
        });
    }

    protected processCreateScore(response: AxiosResponse): Promise<Score[]> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(Score.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return Promise.resolve<Score[]>(result200);

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<Score[]>(null as any);
    }

    /**
     * @return Ok
     */
    getMedia(  cancelToken?: CancelToken | undefined): Promise<Media[]> {
        let url_ = this.baseUrl + "/api/media";
        url_ = url_.replace(/[?&]$/, "");

        let options_: AxiosRequestConfig = {
            method: "GET",
            url: url_,
            headers: {
                "Accept": "application/json"
            },
            cancelToken
        };

        return this.instance.request(options_).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processGetMedia(_response);
        });
    }

    protected processGetMedia(response: AxiosResponse): Promise<Media[]> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(Media.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return Promise.resolve<Media[]>(result200);

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<Media[]>(null as any);
    }

    /**
     * @param file (optional) 
     * @return Ok
     */
    uploadMedia(file: FileParameter | undefined , cancelToken?: CancelToken | undefined): Promise<Media> {
        let url_ = this.baseUrl + "/api/media";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = new FormData();
        if (file === null || file === undefined)
            throw new Error("The parameter 'file' cannot be null.");
        else
            content_.append("file", file.data, file.fileName ? file.fileName : "file");

        let options_: AxiosRequestConfig = {
            data: content_,
            method: "POST",
            url: url_,
            headers: {
                "Accept": "application/json"
            },
            cancelToken
        };

        return this.instance.request(options_).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processUploadMedia(_response);
        });
    }

    protected processUploadMedia(response: AxiosResponse): Promise<Media> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            result200 = Media.fromJS(resultData200);
            return Promise.resolve<Media>(result200);

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<Media>(null as any);
    }

    /**
     * @return Ok
     */
    getParticipants(  cancelToken?: CancelToken | undefined): Promise<Participant[]> {
        let url_ = this.baseUrl + "/api/participants";
        url_ = url_.replace(/[?&]$/, "");

        let options_: AxiosRequestConfig = {
            method: "GET",
            url: url_,
            headers: {
                "Accept": "application/json"
            },
            cancelToken
        };

        return this.instance.request(options_).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processGetParticipants(_response);
        });
    }

    protected processGetParticipants(response: AxiosResponse): Promise<Participant[]> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(Participant.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return Promise.resolve<Participant[]>(result200);

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<Participant[]>(null as any);
    }

    /**
     * @return Ok
     */
    createParticipant(body: IdOrScores__ , cancelToken?: CancelToken | undefined): Promise<Participant> {
        let url_ = this.baseUrl + "/api/participants";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_: AxiosRequestConfig = {
            data: content_,
            method: "POST",
            url: url_,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            cancelToken
        };

        return this.instance.request(options_).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processCreateParticipant(_response);
        });
    }

    protected processCreateParticipant(response: AxiosResponse): Promise<Participant> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            result200 = Participant.fromJS(resultData200);
            return Promise.resolve<Participant>(result200);

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<Participant>(null as any);
    }

    /**
     * @return Ok
     */
    getSettings(  cancelToken?: CancelToken | undefined): Promise<Settings> {
        let url_ = this.baseUrl + "/api/settings";
        url_ = url_.replace(/[?&]$/, "");

        let options_: AxiosRequestConfig = {
            method: "GET",
            url: url_,
            headers: {
                "Accept": "application/json"
            },
            cancelToken
        };

        return this.instance.request(options_).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processGetSettings(_response);
        });
    }

    protected processGetSettings(response: AxiosResponse): Promise<Settings> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            result200 = Settings.fromJS(resultData200);
            return Promise.resolve<Settings>(result200);

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<Settings>(null as any);
    }

    /**
     * @return Ok
     */
    updateSettings(body: Settings , cancelToken?: CancelToken | undefined): Promise<Settings> {
        let url_ = this.baseUrl + "/api/settings";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_: AxiosRequestConfig = {
            data: content_,
            method: "PUT",
            url: url_,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            cancelToken
        };

        return this.instance.request(options_).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processUpdateSettings(_response);
        });
    }

    protected processUpdateSettings(response: AxiosResponse): Promise<Settings> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            result200 = Settings.fromJS(resultData200);
            return Promise.resolve<Settings>(result200);

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<Settings>(null as any);
    }
}

export class Game implements IGame {
    id!: number;
    name!: string;
    scores!: Score[];

    constructor(data?: IGame) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
        if (!data) {
            this.scores = [];
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.name = _data["name"];
            if (Array.isArray(_data["scores"])) {
                this.scores = [] as any;
                for (let item of _data["scores"])
                    this.scores!.push(Score.fromJS(item));
            }
        }
    }

    static fromJS(data: any): Game {
        data = typeof data === 'object' ? data : {};
        let result = new Game();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["name"] = this.name;
        if (Array.isArray(this.scores)) {
            data["scores"] = [];
            for (let item of this.scores)
                data["scores"].push(item.toJSON());
        }
        return data;
    }
}

export interface IGame {
    id: number;
    name: string;
    scores: Score[];
}

export class Score implements IScore {
    id!: number;
    game!: Game;
    player!: Participant;
    score!: number;

    constructor(data?: IScore) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
        if (!data) {
            this.game = new Game();
            this.player = new Participant();
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.game = _data["game"] ? Game.fromJS(_data["game"]) : new Game();
            this.player = _data["player"] ? Participant.fromJS(_data["player"]) : new Participant();
            this.score = _data["score"];
        }
    }

    static fromJS(data: any): Score {
        data = typeof data === 'object' ? data : {};
        let result = new Score();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["game"] = this.game ? this.game.toJSON() : <any>undefined;
        data["player"] = this.player ? this.player.toJSON() : <any>undefined;
        data["score"] = this.score;
        return data;
    }
}

export interface IScore {
    id: number;
    game: Game;
    player: Participant;
    score: number;
}

export class Participant implements IParticipant {
    id!: number;
    name!: string;
    nickname?: string;
    scores!: Score[];

    constructor(data?: IParticipant) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
        if (!data) {
            this.scores = [];
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.name = _data["name"];
            this.nickname = _data["nickname"];
            if (Array.isArray(_data["scores"])) {
                this.scores = [] as any;
                for (let item of _data["scores"])
                    this.scores!.push(Score.fromJS(item));
            }
        }
    }

    static fromJS(data: any): Participant {
        data = typeof data === 'object' ? data : {};
        let result = new Participant();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["name"] = this.name;
        data["nickname"] = this.nickname;
        if (Array.isArray(this.scores)) {
            data["scores"] = [];
            for (let item of this.scores)
                data["scores"].push(item.toJSON());
        }
        return data;
    }
}

export interface IParticipant {
    id: number;
    name: string;
    nickname?: string;
    scores: Score[];
}

/** From T, pick a set of properties whose keys are in the union K */
export class Name_ implements IName_ {
    name!: string;

    constructor(data?: IName_) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.name = _data["name"];
        }
    }

    static fromJS(data: any): Name_ {
        data = typeof data === 'object' ? data : {};
        let result = new Name_();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        return data;
    }
}

/** From T, pick a set of properties whose keys are in the union K */
export interface IName_ {
    name: string;
}

export class CreateScore implements ICreateScore {
    participants!: number[];
    game!: number;

    constructor(data?: ICreateScore) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
        if (!data) {
            this.participants = [];
        }
    }

    init(_data?: any) {
        if (_data) {
            if (Array.isArray(_data["participants"])) {
                this.participants = [] as any;
                for (let item of _data["participants"])
                    this.participants!.push(item);
            }
            this.game = _data["game"];
        }
    }

    static fromJS(data: any): CreateScore {
        data = typeof data === 'object' ? data : {};
        let result = new CreateScore();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (Array.isArray(this.participants)) {
            data["participants"] = [];
            for (let item of this.participants)
                data["participants"].push(item);
        }
        data["game"] = this.game;
        return data;
    }
}

export interface ICreateScore {
    participants: number[];
    game: number;
}

export class Media implements IMedia {
    id!: number;
    url!: string;
    width!: number;
    height!: number;

    constructor(data?: IMedia) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.url = _data["url"];
            this.width = _data["width"];
            this.height = _data["height"];
        }
    }

    static fromJS(data: any): Media {
        data = typeof data === 'object' ? data : {};
        let result = new Media();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["url"] = this.url;
        data["width"] = this.width;
        data["height"] = this.height;
        return data;
    }
}

export interface IMedia {
    id: number;
    url: string;
    width: number;
    height: number;
}

/** From T, pick a set of properties whose keys are in the union K */
export class IdOrScores__ implements IIdOrScores__ {
    name!: string;
    nickname?: string;

    constructor(data?: IIdOrScores__) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.name = _data["name"];
            this.nickname = _data["nickname"];
        }
    }

    static fromJS(data: any): IdOrScores__ {
        data = typeof data === 'object' ? data : {};
        let result = new IdOrScores__();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["nickname"] = this.nickname;
        return data;
    }
}

/** From T, pick a set of properties whose keys are in the union K */
export interface IIdOrScores__ {
    name: string;
    nickname?: string;
}

export class Settings implements ISettings {
    id!: number;
    title!: string;
    cloudinaryDirectory!: string;
    primaryColor!: string;
    textColor!: string;
    backgroundColor!: string;
    iconColor!: string;
    cardBackgroundColor!: string;
    tableBorderColor!: string;
    menuBackgroundColor!: string;

    constructor(data?: ISettings) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.title = _data["title"];
            this.cloudinaryDirectory = _data["cloudinaryDirectory"];
            this.primaryColor = _data["primaryColor"];
            this.textColor = _data["textColor"];
            this.backgroundColor = _data["backgroundColor"];
            this.iconColor = _data["iconColor"];
            this.cardBackgroundColor = _data["cardBackgroundColor"];
            this.tableBorderColor = _data["tableBorderColor"];
            this.menuBackgroundColor = _data["menuBackgroundColor"];
        }
    }

    static fromJS(data: any): Settings {
        data = typeof data === 'object' ? data : {};
        let result = new Settings();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["title"] = this.title;
        data["cloudinaryDirectory"] = this.cloudinaryDirectory;
        data["primaryColor"] = this.primaryColor;
        data["textColor"] = this.textColor;
        data["backgroundColor"] = this.backgroundColor;
        data["iconColor"] = this.iconColor;
        data["cardBackgroundColor"] = this.cardBackgroundColor;
        data["tableBorderColor"] = this.tableBorderColor;
        data["menuBackgroundColor"] = this.menuBackgroundColor;
        return data;
    }
}

export interface ISettings {
    id: number;
    title: string;
    cloudinaryDirectory: string;
    primaryColor: string;
    textColor: string;
    backgroundColor: string;
    iconColor: string;
    cardBackgroundColor: string;
    tableBorderColor: string;
    menuBackgroundColor: string;
}

export interface FileParameter {
    data: any;
    fileName: string;
}

export class ApiException extends Error {
    message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isApiException = true;

    static isApiException(obj: any): obj is ApiException {
        return obj.isApiException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): any {
    if (result !== null && result !== undefined)
        throw result;
    else
        throw new ApiException(message, status, response, headers, null);
}

function isAxiosError(obj: any | undefined): obj is AxiosError {
    return obj && obj.isAxiosError === true;
}