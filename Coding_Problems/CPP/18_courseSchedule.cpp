#include <iostream>
#include <vector>
#include <queue>

using namespace std;

bool canFinish(int numCourses, vector<vector<int>> &prerequisites)
{
    vector<vector<int>> graph(numCourses);
    vector<int> indegree(numCourses, 0);

    // Build graph
    for (auto &edge : prerequisites)
    {
        int course = edge[0];
        int prerequisite = edge[1];

        graph[prerequisite].push_back(course);
        indegree[course]++;
        // cout << indegree[course] << " is a indegree of course " << course << "\n";
    }

    queue<int> q;

    // Add all courses with indegree 0
    for (int i = 0; i < numCourses; i++)
    {
        if (indegree[i] == 0)
        {
            q.push(i);
        }
    }

    int completed = 0;

    while (!q.empty())
    {
        int current = q.front();
        q.pop();

        completed++;
        // cout << current << " is completed\n";
        for (int neighbor : graph[current])
        {
            indegree[neighbor]--;

            if (indegree[neighbor] == 0)
            {
                // cout << neighbor << " neighbor of current " << current << " is pushed\n";
                q.push(neighbor);
            }
        }
    }

    return completed == numCourses;
}

int main()
{
    int numCourses = 4;

    vector<vector<int>> prerequisites = {
        {1, 0},
        {2, 0},
        {3, 1},
        {3, 2}};

    if (canFinish(numCourses, prerequisites))
    {
        cout << "Can finish all courses" << endl;
    }
    else
    {
        cout << "Cannot finish all courses" << endl;
    }

    return 0;
}