from django.views.generic.list import ListView
from django.views.generic.detail import DetailView
from django.http import JsonResponse

from .models import Task

class TaskList(ListView):
    model = Task

    def get(self, request, *args, **kwargs):
        tasks_data = Task.objects.all()
        tasks = self.to_list(tasks_data)
        return JsonResponse(tasks, safe=False)
    
    def to_list(self, tasks_data):
        return list(map(lambda task: {
            "id": task.id,
            "title": task.title,
            "memo": task.memo,
        }, tasks_data))


class TaskDetail(DetailView):
    model = Task

    def get(self, request, *args, **kwargs):
        task_id = self.kwargs.get('pk')
        task_data = Task.objects.get(id=task_id)  
        task = self.to_dict(task_data)
        return JsonResponse(task)
    
    def to_dict(self, task_data):
        return {
            "id": task_data.id,
            "title": task_data.title,
            "memo": task_data.memo,
        }
