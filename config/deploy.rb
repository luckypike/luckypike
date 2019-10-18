lock '~> 3'

set :application, 'luckypike'
set :repo_url, 'git@github.com:luckypike/luckypike.git'

set :deploy_to, '/home/deploy/apps/luckypike.com'

append :linked_files, 'config/database.yml', 'config/master.key'

append :linked_dirs, 'log', 'tmp/pids', 'tmp/cache', 'tmp/sockets', 'public/system'

set :keep_releases, 5

set :ssh_options, forward_agent: true
