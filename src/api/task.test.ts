import { TestHelper } from "test/helpers/TestHelper";
import { TestingApp } from "test/helpers/TestHelper/create";
import { TaskDTO } from "src/services/task.dto";
import Task from "src/entity/Task";
import axios, { AxiosInstance } from "axios";

describe("Task", () => {
    let app: TestingApp;
    let tasks: Task[];
    let ax: AxiosInstance;

    afterAll(async () => { await app.app.close(); });
    beforeAll(async () => {
        app = await TestHelper.create.app();
        ax = axios.create({baseURL: app.url});
        tasks = Array(2).fill(0).map(() => TestHelper.generate.task(1,2,3));
    });
    
    it("test", async () => {
        await ax.get("task").then(res => expect(res.data).toEqual([]));
        await expect(ax.get("task/321")).rejects.toThrow("404");
        await ax.post("task", tasks[0]);
        await ax.post("task", tasks[1]);
        
        await ax.get("task").then(res => {
            res.data.sort((a:any, b:any) => a.id.localeCompare(b.id));
            expect(res.data).toEqual([tasks[0], tasks[1]]);
        });

        await ax.get("task/321").then(res => expect(res.data).toEqual(tasks[1]));

        await ax.put("task/321", {minSpeed: 19} as TaskDTO);

        await ax.get("task/321").then(res => expect(res.data).toEqual({
            ...tasks[1],
            maxSpeed: 19
        }));

        await ax.delete("task/321");
        await expect(ax.get("task/321")).rejects.toThrow("404");

        await ax.get("task").then(res => {
            res.data.sort((a:any, b:any) => a.id.localeCompare(b.id));
            expect(res.data).toEqual([tasks[0]]);
        });
    });
});