import Queue
import threading
import socket
from datetime import datetime

total_request = 10
concurrency = 10

time_pool = []

q = Queue.Queue()

for i in range(total_request):
  q.put('Hello World')


def worker(queue):
  while not queue.empty():
    data = queue.get()
    # start
    start = datetime.now()

    # do and wait and die
    client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    client_socket.connect(('localhost', 8124))
    client_socket.send(data)

    stream = client_socket.recv(4096)

    client_socket.close()
    del client_socket

    # end
    end = datetime.now() - start
    time_pool.append(end.microseconds)
    q.task_done()


for i in range(concurrency):
  t = threading.Thread(target=worker, args=(q, ))
  t.daemon = True
  t.start()

q.join()  # block until all tasks are done

print "%.1f ms" % (sum(time_pool) / float(len(time_pool)))
